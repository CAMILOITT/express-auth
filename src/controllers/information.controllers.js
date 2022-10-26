import Information from '../models/Information';

export const getInformation = async (req, res) => {
  try {
    const { id } = req.body;
    const informationUser = await Information.findByPk(id);
    res.send(informationUser);
  } catch (error) {
    console.log(error);
  }
};

export const updateInformation = async (req, res) => {
  try {
    const { id } = req.params;
    const information = await Information.findByPk(id);

    information.set(req.body);
    information.save();

    res.send(information);
  } catch (error) {
    console.log(error);
  }
};

export const createInformation = async (req, res) => {
  try {
    const { description, photo } = req.body;
    const newInformation = await Information.create({
      description,
      photo,
    });
    res.send(newInformation);
  } catch (error) {
    console.log(error);
  }
};
