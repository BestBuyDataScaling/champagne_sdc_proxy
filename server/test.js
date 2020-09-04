import { sleep } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "1m", target: 250 },
    { duration: "3m", target: 1000 },
    { duration: "1m", target: 250 },
  ]
};

export default function main() {
  let response;

  // script here []
  response = http.get(
    "http://127.0.0.1:3003/products/Toy/Frozen/violet/Cheese"
  );

  // Automatically added sleep
  sleep(1);
}

// check function for res