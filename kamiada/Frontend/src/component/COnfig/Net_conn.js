import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fungsi untuk login
export async function IsLogin({ email, password }) {
  try {
    const payload = { email, password };
    console.log("Login Payload:", payload);

    const response = await axios.post(`${BASE_URL}/auth/login`, payload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    sessionStorage.setItem("email", email); // Simpan email di session storage
    console.log("Login successful:", response.data);
    Cookies.set("token", response.data.token, { expires: 7 });
    Cookies.set("role", response.data.role, { expires: 7 }); // Simpan token JWT di cookies
    Cookies.set("email", response.data.email, { expires: 7 });

    return {
      user_id: response.data.user_id,
      role: response.data.role,
      email: response.data.email,
    }; // Kembalikan user ID
  } catch (error) {
    console.error(
      "Login error:",
      error.response?.data?.message || error.message
    );
    throw new Error(
      `Login failed: ${error.response?.data?.message || error.message}`
    );
  }
}

// Fungsi untuk mengambil data dengan JWT
export async function fetchDataWithJWT() {
  const token = Cookies.get("token");

  if (!token) {
    console.warn("No token found. Cannot fetch data.");
    throw new Error("Unauthorized: No token provided");
  }

  try {
    const response = await axios.get(`${BASE_URL}/jasa`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      console.warn("Unauthorized. Removing token...");
      Cookies.remove("token");
      throw new Error("Unauthorized: Session expired");
    }

    console.error(
      "Error fetching additional data:",
      error.response?.data?.message || error.message
    );
    throw new Error(
      `Fetching data failed: ${error.response?.data?.message || error.message}`
    );
  }
}

// Fungsi untuk registrasi
export async function IsRegister({ username, email, password }) {
  try {
    const payload = {
      username,
      email,
      password,
      role: "buyer", // Set otomatis role sebagai buyer
    };

    console.log("Registration Payload:", payload);

    const response = await axios.post(`${BASE_URL}/auth/register`, payload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    console.log("Registration successful:", response.data);
    return response.data; // Return data agar pemanggil bisa menangani respons
  } catch (error) {
    console.error(
      "Registration error:",
      error.response?.data?.message || error.message
    );
    throw new Error(
      `Registration failed: ${error.response?.data?.message || error.message}`
    );
  }
}

// mengambil detail dari jasa dan di tampilkan pada detail Page
export const fetchJasaDetail = async (id) => {
  const token = Cookies.get("token");

  if (!token) {
    console.warn("No token found. Cannot fetch data.");
    throw new Error("Unauthorized: No token provided");
  }

  try {
    const response = await axios.get(`${BASE_URL}/jasa/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      console.warn("Unauthorized. Removing token...");
      Cookies.remove("token");
      throw new Error("Unauthorized: Session expired");
    }

    console.error(
      "Error fetching jasa details:",
      error.response?.data?.message || error.message
    );
    throw new Error(
      `Fetching data failed: ${error.response?.data?.message || error.message}`
    );
  }
};

// Search Data Function
export const searchData = async (query) => {
  if (!query.trim()) {
    throw new Error("Masukkan kata kunci pencarian!");
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/jasa/search?q=${query.trim()}`
    );
    return response.data.data; // Return the data for processing
  } catch (err) {
    console.error("Gagal mengambil data jasa!", err);
    throw new Error("Gagal mengambil data jasa!");
  }
};
