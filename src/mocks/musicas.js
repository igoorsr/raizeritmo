import favelaViveVideo from "../../assets/Videos/favelaVive.mp4";
import cachimboPaz from "../../assets/Videos/cachimbo.mp4";
import oitavoAnjoVideo from "../../assets/Videos/oitavoAnjo.mp4";
import favelaSinistraVideo from "../../assets/Videos/favelaSinistra.mp4";
import rzoVideo from "../../assets/Videos/rzo.mp4";
import sabotageVideo from "../../assets/Videos/sabotage.mp4";

import favelaVive from "../../assets/Musicas/FavelaVIVE.jpg";
import gabrielPensador from "../../assets/Musicas/GabrielPensador.jpg";
import oitavoAnjo from "../../assets/Musicas/OitavoAnjo.jpg";
import favela from "../../assets/Musicas/favelaSinistra.jpg";
import rzo from "../../assets/Musicas/Rzo.jpg";
import sabotage from "../../assets/Musicas/Sabotage.webp";

const musicas = [
  {
    id: "1",
    nome: "Favela Vive 3",
    descricao: "ADL, Choice, Djonga, Menor do Chapa & Negra Li",
    imagem: favelaVive,
    preco: "R$ 1,90",
    videoUrl: favelaViveVideo,
    faixas: [{ id: "1-1", nome: "Favela Vive 3", duracao: "8:57" }],
  },
  {
    id: "2",
    nome: "Cachimbo Da Paz",
    descricao: "Gabriel O Pensador, Lulu Santos",
    imagem: gabrielPensador,
    preco: "R$ 2,00",
    videoUrl: cachimboPaz,
    faixas: [{ id: "2-1", nome: "Cachimbo Da Paz", duracao: "6:02" }],
  },
  {
    id: "3",
    nome: "Oitavo Anjo",
    descricao: "509-E",
    imagem: oitavoAnjo,
    preco: "R$ 2,10",
    videoUrl: oitavoAnjoVideo,
    faixas: [{ id: "3-1", nome: "Oitavo Anjo", duracao: "5:28" }],
  },
  {
    id: "4",
    nome: "Favela Sinistra",
    descricao: "Trilha Sonora do Gueto",
    imagem: favela,
    preco: "R$ 1,80",
    videoUrl: favelaSinistraVideo,
    faixas: [{ id: "4-1", nome: "Favela Sinistra", duracao: "3:38" }],
  },
  {
    id: "5",
    nome: "O Trem",
    descricao: "RZO",
    imagem: rzo,
    preco: "R$ 1,70",
    videoUrl: rzoVideo,
    faixas: [{ id: "5-1", nome: "O Trem", duracao: "4:08" }],
  },
  {
    id: "6",
    nome: "Um Bom Lugar",
    descricao: "Sabotage",
    imagem: sabotage,
    preco: "R$ 2,00",
    videoUrl: sabotageVideo,
    faixas: [{ id: "6-1", nome: " Um Bom Lugar", duracao: "5:38" }],
  },
];

export default musicas;
