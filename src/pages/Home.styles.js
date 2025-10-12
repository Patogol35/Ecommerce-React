const styles = {
  loadingBox: {
    mt: 8,
    display: "flex",
    justifyContent: "center",
  },
  header: {
    mb: 4,
    textAlign: "center",
  },
  headerTitle: {
    color: "primary.main",
    mt: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  filtersContainer: {
    p: 3,
    borderRadius: 3,
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
    mb: 4,
  },
  searchField: {
    minWidth: 250,
  },
  categoryField: {
    minWidth: 200,
  },
  sortField: {
    minWidth: 220,
  },
  paginationBox: {
    mt: 4,
    display: "flex",
    justifyContent: "center",
  },
  carritoBtn: {
    position: "fixed",
    bottom: 24,
    right: 24,
    bgcolor: "primary.main",
    color: "white",
    "&:hover": { bgcolor: "primary.dark" },
  },
};

export default styles;
