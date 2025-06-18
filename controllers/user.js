export const listUser = (req, res) => {
  // code body
  res.json({ message: "This is List All User" });
};


export const readUser = (req, res) =>{
  res.json({message:"this is Read User"})
}

export const createUser = (req, res) => {
  res.json({message: "This is POST User"})
}

export const updateRoleUser = (req, res) => {
  res.json({message: "This is Update Role User"})
}

export const deleteUser = (req, res) => {
  res.json({message: "This is Delete User"})
}