import { useEffect, useState } from "react";
import axios from "axios";

export const GetUserToken = () => {
  const [token, setToken] = useState<string>();

  useEffect(() => {
    const fetchToken = async () => {
      const response = await axios.get("/api/get-token");
      setToken(response.data);
    };

    fetchToken();
  }, []);

  return {
    token,
  };
};
