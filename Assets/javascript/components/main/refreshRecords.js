let refreshRecords = () => {
  usersDataMainContainer.innerHTML = ``;
  usersDataArray.forEach((data, index) => {
    recordRow(
      `${data.getProfilePic()}`,
      `${data.getFirstName()} ${data.getLastName()}`,
      `${data.getEmail()}`,
      `${data.getContactNum()}`);

    modal(
      `${data.getProfilePic()}`,
      `${data.getFirstName()} ${data.getLastName()}`,
      `${data.getEmail()}`,
      `${data.getContactNum()}`,
      `${data.getAddress()}`,
      `${data.getBio()}`,
      `${data.getID()}`);
  });
};
