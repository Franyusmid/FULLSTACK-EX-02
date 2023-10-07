let data = [
  {
    id: 1,
    marca: "AZUS",
    modelo: "TUF GAMING",
  },
  {
    id: 2,
    marca: "HP",
    modelo: "Envy",
  },
];

const readAll = (req, res) => {
  res.json({
    msg: "Computadoras obtenidos",
    data: data,
  });
};

export default {
  readAll,
};
