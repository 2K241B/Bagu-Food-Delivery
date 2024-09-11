import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: true,
  auth: {
    user: "munkhbat20241715@gmail.com",
    pass: "fdhybrrxoebqrdsc",
  },
});

export const sendMail = async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <munkhbat20241715@gmail.com>',
      to: "bar@example.com, baz@example.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });

    if (info.messageId) {
      res.status(200).send({ success: true });
    } else {
      res.status(404).send({ error: "error" });
    }
  } catch (error) {
    res.status(404).json({ error: "error" });
    console.log(error);
  }
};
