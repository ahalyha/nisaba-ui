import axios from "axios";

const baseURL = process.env.BASE_URL || "";
const baseURLPrivate = process.env.BASE_URL_PRIVATE || "";


export const api = axios.create({
  baseURL,
  headers: {},
});

export const apiPrivate = axios.create({
  baseURL: baseURLPrivate,
  headers: {},
});