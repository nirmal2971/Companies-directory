import React from "react";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

export default function CompanyCard({ company }) {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 250,
        mb: 2,
        position: "relative",
        overflow: "hidden",
        "&:hover": { boxShadow: 6, transform: "translateY(-3px)" },
        transition: "0.3s",
      }}
    >
      <Box
        sx={{
          height: "6px",
          background: "linear-gradient(90deg, #00c6ff, #0072ff)",
        }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {company.name}
        </Typography>

        <Box display="flex" flexWrap="wrap" gap={1} mb={1}>
          <Chip
            label={company.industry}
            size="small"
            sx={{
              background: "linear-gradient(90deg, #43e97b, #38f9d7)",
              color: "#fff",
            }}
          />
          <Chip
            label={company.location}
            size="small"
            sx={{
              background: "linear-gradient(90deg, #fa709a, #fee140)",
              color: "#fff",
            }}
          />
        </Box>

        <Typography variant="body2">
          Employees: <strong>{company.employees}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
