import { marketplace } from "./schema.js";

export const postStartup = async (req, res) => {
  const { name, tagline, tags, description, equity, price, owner, mail } =
    req.body;
  const mongo_res = await marketplace.create({
    name,
    tagline,
    tags,
    description,
    equity,
    price,
    owner,
    mail,
  });
  res.status(200).send({
    message: "done",
  });
};

export const getStartup = async (req, res) => {
  try {
    const allStartups = await marketplace.find();
    res.json({
      startups: allStartups,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
