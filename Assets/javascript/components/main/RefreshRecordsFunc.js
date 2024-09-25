let refreshRecords = () => {
  usersDataMainContainer.innerHTML = ``;
  usersDataArray.forEach((data, index) => {
    recordFunc(
      `${data.getProfilePic()}`,
      `${data.getFirstName()} ${data.getLastName()}`,
      `${data.getEmail()}`,
      `${data.getContactNum()}`,
      index + 1
    );

    readModalFunc(
      `${data.getProfilePic()}`,
      `${data.getFirstName()} ${data.getLastName()}`,
      `${data.getEmail()}`,
      `${data.getContactNum()}`,
      `${data.getAddress()}`,
      `${data.getBio()}`,
      `${data.id}`
    );
  });
};
