
import pool from "../db/database.js";

class LivrosModel {

  async showLivros() {
    const [rows] = await pool.execute(`
      SELECT 
        c.id_livro,
        c.titulo,
        c.autor,
        c.ano_publicacao,
        c.preco,
      FROM livros c
      JOIN livros cli ON c.id_livro = cli.id_livro
      JOIN categorias l ON c.id_categoria = l.id_categoria;
    `);

    return rows;
  }


  async getLivroById(id) {
    const [rows] = await pool.execute(
      "SELECT * FROM livros WHERE id_livro = ?;",
      [id]
    );

    return rows[0];
  }


  async createLivro(livroData) {
    const { titulo, autor, ano_publicacao, preco, id_editora, id_categoria } = livroData;

    const [rows] = await pool.execute(

      "INSERT INTO livros (titulo, autor, ano_publicacao, preco, id_editora, id_categoria) VALUES (?, ?, ?, ?, ?, ?);,"

      [titulo, autor, ano_publicacao, preco, id_editora, id_categoria]
    );

    return rows;
  }


  async updateLivro(id, livroData) {
    const { titulo, autor, ano_publicacao, preco, id_editora, id_categoria } = livroData;

    const [rows] = await pool.execute(
      "UPDATE livros SET titulo = ?, autor = ?, ano_publicacao = ?, preco = ?, id_editora = ?, id_categoria = ? WHERE id_livro = ?;,"

      [titulo, autor, ano_publicacao, preco, id_editora, id_categoria, id]
    );

    return rows;
  }


  async deleteLivro(id) {
    const [row] = await pool.execute(
      "DELETE FROM livros WHERE id_livro = ?;",
      [id]
    );

    return row;
  }
}

export default new LivrosModel();