import { log } from "console";
import { Ilogin } from "../../moduls/moduls";
import { AppDispatch } from "../store";

export const login = (data: Ilogin) => async (dispatch: AppDispatch) => {
  try {
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
