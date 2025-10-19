import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Pagination,
  Button,
} from "@mui/material";
import CompanyGrid from "./components/CompanyGrid";
import companiesData from "./data/companies.json";

export default function App() {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 8;

  const industries = [...new Set(companiesData.map((c) => c.industry))];
  const locations = [...new Set(companiesData.map((c) => c.location))];

  const filtered = useMemo(() => {
    return companiesData.filter((c) => {
      return (
        c.name.toLowerCase().includes(search.toLowerCase()) &&
        (industry ? c.industry === industry : true) &&
        (location ? c.location === location : true)
      );
    });
  }, [search, industry, location]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const clearFilters = () => {
    setSearch("");
    setIndustry("");
    setLocation("");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
        py: 4,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
          py: 4,
          mb: 4,
          borderRadius: 2,
          textAlign: "center",
          color: "white",
          boxShadow: 3,
          maxWidth: "900px",
          mx: "auto",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          🌐 Companies Directory
        </Typography>
      </Box>

      {/* Filters */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mb: 4,
          maxWidth: "900px",
          mx: "auto",
        }}
      >
        <TextField
          label="Search by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          size="small"
        />

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Industry</InputLabel>
          <Select
            value={industry}
            label="Industry"
            onChange={(e) => setIndustry(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {industries.map((ind) => (
              <MenuItem key={ind} value={ind}>
                {ind}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Location</InputLabel>
          <Select
            value={location}
            label="Location"
            onChange={(e) => setLocation(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {locations.map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={clearFilters}
          sx={{
            background: "linear-gradient(90deg, #FF512F, #DD2476)",
            "&:hover": {
              background: "linear-gradient(90deg, #DD2476, #FF512F)",
            },
          }}
        >
          Clear
        </Button>
      </Box>

      {/* Companies Grid */}
      <Box sx={{ maxWidth: "1100px", mx: "auto", px: 2 }}>
        <CompanyGrid companies={paginated} />
      </Box>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, val) => setPage(val)}
            color="primary"
            shape="rounded"
          />
        </Box>
      )}
    </Box>
  );
}
