import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { AuthenticatedGet } from "../../../utils/AuthenticatedFetch";

export default function Home() {

  const [merchant, setMerchant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      AuthenticatedGet(
        `${process.env.HOST_NAME}/auth/merchants/validate_token`
      )
        .then(
          response => {
            console.log(response);
            setLoading(false);
          },
          error => {
            console.log(error);
            setLoading(false);
            document.location.href = '/merchant/sign-in';
          }
        )
    }
  })

  const signOut = () => {
    fetch(`${process.env.HOST_NAME}/auth/merchants/sign_out`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.json());
    })
  }

  return (
    <div>
      <h2>
        Merchant home
      </h2>
      <Button
        variant="contained"
        onClick={signOut}
      >
        Sign out
      </Button>
    </div>
  );
}