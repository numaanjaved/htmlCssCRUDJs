let refreshRecords = () => {
  usersDataMainContainer.innerHTML = ``;
  usersDataArray.forEach((data, index) => {
    console.log(data)
    recordRow(
      `${data.getProfilePic()}`,
      `${data.getFirstName()} ${data.getLastName()}`,
      `${data.getEmail()}`,
      `${data.getContactNum()}`,
    );

    readModal(
      `${data.getProfilePic()}`,
      `${data.getFirstName()} ${data.getLastName()}`,
      `${data.getEmail()}`,
      `${data.getContactNum()}`,
      `${data.getAddress()}`,
      `${data.getBio()}`,
      `${data.getID()}`

    );
  });
};
