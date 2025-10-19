import React from "react";
import { Grid } from "@mui/material";
import CompanyCard from "./CompanyCard";

export default function CompanyGrid({ companies }) {
  if (companies.length === 0) return <div>No companies found.</div>;

  return (
    <Grid container spacing={2}>
      {companies.map((c) => (
        <Grid item xs={12} sm={6} md={4} key={c.id}>
          <CompanyCard company={c} />
        </Grid>
      ))}
    </Grid>
  );
}
