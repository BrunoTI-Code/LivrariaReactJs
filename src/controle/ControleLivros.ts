import { Livro } from '../modelo/Livro';

// Livro que representa os livros existentes
let livros: Livro[] = [
  new Livro(1, 1, 'Mitologia Nórdica', 'Fascinado por essa mitologia desde a infância, o autor compôs uma coletânea de quinze contos que começa com a narração da origem do mundo e mostra a relação conturbada entre deuses, gigantes e anões, indo até o Ragnarök, o assustador cenário do apocalipse que vai levar ao fim no mundo. Às vezes intensos e sombrios, outras vezes divertidos e heroicos, os contos retratam tempos longínquos em que os feitos dos deuses eram contados ao redor da fogueira em noites frias e estreladas.', ['Neil Gaiman']),
  new Livro(2, 2, 'Entre Deuses e Monstros', ' Entre Deuses e Monstros, da escritora Lia Neiva, narra a jornada de um homem comum que vê sua vida transformada pelos enigmas de deuses, monstros e heróis, a “poderosa trindade” da Grécia Antiga. Os mitos gregos, datados de mais de três mil anos, são ricos em dados psicológicos, sociais, artísticos, políticos e econômicos, influenciam e fascinam leitores de todas as idades até hoje, através da literatura e do cinema..', ['Lia Neiva']),
  new Livro(3, 3, 'O mistério do relógio na parede', ' Lewis Barnavelt, de apenas 10 anos, acaba de perder os pais e vai morar com o tio Jonathan Barnavel, mas ele espera encontrar uma pessoa comum... só que o tio é tudo, menos comum. Jonathan e sua vizinha, a Sra. Zimmermann, são bruxos! Lewis, que sempre desejou viver uma grande aventura, não poderia estar mais entusiasmado. No começo, assistir à magia é suficiente, mas então ele resolve experimentar a própria magia e, sem querer, ressuscita a antiga proprietária da casa: a temida Serenna Izard. Parece que Serenna e seu marido construíram um relógio nas paredes, e não qualquer relógio. Um relógio que pode aniquilar a humanidade. E somente os Barnavelts podem pará-lo!', ['John Bellairs']),
];

export class ControleLivro {
  //obter a lista completa de livros
  obterLivros() {
    return livros;
  }

  //incluir um novo livro à lista
  incluir(livro: Livro) {
    const maxCodigo = Math.max(...livros.map(l => l.codigo));
    livro.codigo = maxCodigo + 1;
    livros.push(livro);
  }

  //excluir um livro da lista
  excluir(codigo: number) {
    const index = livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}
