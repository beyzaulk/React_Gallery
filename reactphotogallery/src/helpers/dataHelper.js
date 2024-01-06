const getUsers = (data) => {
  return data?.filter((item) => item?.status);
};

export { getUsers };
