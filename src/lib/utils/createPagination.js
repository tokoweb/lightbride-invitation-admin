const createPagination = ({
  page = 1,
  perPage = 10,
  sort = "updated_at",
  search = "",
  order = "desc",
  active = "",
}) => ({
  page,
  limit: perPage,
  sort,
  search,
  order,
  active,
});

export default createPagination;
