let refreshRecords = () => {
  usersDataMainContainer.innerHTML = ``;
  usersDataArray.forEach((data, index) => {
    recordFunc(
      `${data.userPicture}`,
      `${data.FirstName} ${data.LastName}`,
      `${data.Email}`,
      `${data.Contact}`,
      index + 1
    );

    readModalFunc(
      `${data.userPicture}`,
      `${data.FirstName} ${data.LastName}`,
      `${data.Email}`,
      `${data.Contact}`,
      `${data.Address}`,
      `${data.Bio}`,
      index + 1
    );
  });
};
