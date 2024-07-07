import { showcase } from "./schema.js";

export const postIdea = async (req, res) => {
  const { name, tagline, tags, description, owner, mail } =
    req.body;
  const mongo_res = await showcase.create({
    name,
    tagline,
    tags,
    description,
    owner,
    mail,
  });
  res.status(200).send({
    message: "done",
  });
};

export const getIdea = async (req, res) => {
  try {
    const allStartups = await showcase.find();
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
