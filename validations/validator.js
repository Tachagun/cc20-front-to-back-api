// Validate with yup
import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("Email ไม่ถูกต้อง").required("กรณากรอก Email"),
  name: string().min(2, "Name ต้องมีอย่างน้อย 2 ตัวอักษร"),
  password: string().min(6, "Password ต้องมีอย่างน้อย 6 ตัวอักษร"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Confirm Password ไม่ตรงกัน"
  ),
});

export const loginSchema = object({
  email: string().email("Email ไม่ถูกต้อง").required("กรณากรอก Email"),
  password: string().min(6, "Password ต้องมีอย่างน้อย 6 ตัวอักษร"),
});

export const validate = (schema) => async (req, res, next) => {
  // code body
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTxt = errMsg.join(",");
    console.log(errTxt);
    const mergeErr = new Error(errTxt);
    next(mergeErr);
  }
};
