import { Holidays } from "../deps.ts";

export default ({ params, response }) => {
  const { country, state, year } = params;
  const hd = new Holidays(country, state);
  response.body = hd.getHolidays(year | 0);
};
