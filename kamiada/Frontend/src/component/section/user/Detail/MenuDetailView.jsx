import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJasaDetail } from "../../../COnfig/Net_conn";
import { NavbarUser } from "../../../fragment/UserNavbar/NavbarUser";
import { FaLocationDot } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";

export const MenuDetailView = () => {
  const { id } = useParams();
  const [jasa, setJasa] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchJasaDetail(id);
        setJasa(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser />
      <div className="flex-grow p-4 ">
        <section className="max-w-screen-xl mx-auto py-10 mt-5 mb:mt-10">
          {/*  */}
          <p className="text-3xl font-bold mb-2 text-center mt-10">Detail</p>
          <p className="text-3xl font-bold mb-2 text-center">{jasa?.title}</p>
          <div className="bg-yellow-50 shadow-lg rounded-2xl mt-10">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap -mx-4">
                {/* Product Images */}
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <img
                    src={jasa?.image_url || "https://via.placeholder.com/400"}
                    alt={jasa?.title || "Gambar tidak tersedia"}
                    className="w-full h-auto rounded-lg md:ml-6 md:mt-4 shadow-lg mb-4"
                    id="mainImage"
                  />
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 px-4">
                  <h2 className="text-3xl font-bold mb-2 text-center">
                    {/* tittle */}
                    {jasa?.title}
                  </h2>
                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-center">
                    <span className="font-bold">Kategori</span> : &nbsp;
                    {jasa?.category}
                  </p>

                  <p className="text-gray-700 mb-6 text-center">
                    {jasa?.description}
                  </p>
                  <div className="flex justify-center mt-10 mb-2">
                    <FaLocationDot
                      className=""
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                  <p className="text-gray-600 mb-4 text-center">
                    {jasa?.location}
                  </p>
                  <div className="flex ml-15 mt-10 mb-2 ">
                    <a href={`https://wa.me/${jasa?.wa}`} type="button">
                      <FaWhatsappSquare
                        style={{ width: "40px", height: "40px" }}
                        className=" text-green-700 hover:text-green-500"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
