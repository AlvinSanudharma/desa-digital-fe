import numeral from "numeral";

export function formatRupiah(value) {
  return numeral(value).format("0,0[.]00");
}

export function parseRupiah(value) {
  return numeral(value).value();
}

export function formatPercentage(value) {
  return numeral(value).format("0,0[.]00%");
}

export function formatDate(date) {
  const options = { day: "numeric", month: "long", year: "numeric" };

  return new Date(date).toLocaleDateString("id-ID", options);
}

export function formatDateTime(date) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return new Date(date).toLocaleDateString("id-ID", options);
}
