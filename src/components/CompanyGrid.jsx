import React from "react";
import { Grid, Typography } from "@mui/material";
import CompanyCard from "./CompanyCard";

export default function CompanyGrid({ companies }) {
  if (companies.length === 0) {
    return (
      <Typography align="center" sx={{ mt: 4 }}>
        No companies found.
      </Typography>
    );
  }

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
