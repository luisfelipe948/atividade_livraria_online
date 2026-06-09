import pool from "../db/database.js";

class LivrosModel {
  async showLivros() {
    const [rows] = await pool.execute(
      `SELECT l.*,
              c.categoria,
              e.nome AS editora
       FROM livros l
       JOIN categorias c ON l.id_categoria = c.id_categoria
       JOIN editoras   e ON l.id_editora   = e.id_editora;`
    );
    return rows;
  }

  async getLivroById(id) {
    const [rows] = await pool.execute(
      "SELECT * FROM livros WHERE id_livro = ?;",
      [id]
    );
    return rows;
  }

  async createLivro(livroData) {
    const { titulo, autor, ano_publicacao, preco, id_editora, id_categoria } = livroData;
    const [row] = await pool.execute(
      "INSERT INTO livros (titulo, autor, ano_publicacao, preco, id_editora, id_categoria) VALUES (?, ?, ?, ?, ?, ?);",
      [titulo, autor, ano_publicacao, preco, id_editora, id_categoria]
    );
    return row;
  }

  async updateLivro(id, livroData) {
    const { titulo, autor, ano_publicacao, preco, id_editora, id_categoria } = livroData;
    const [row] = await pool.execute(
      `UPDATE livros SET
        titulo        = ?,
        autor         = ?,
        ano_publicacao = ?,
        preco         = ?,
        id_editora    = ?,
        id_categoria  = ?
       WHERE id_livro = ?;`,
      [titulo, autor, ano_publicacao, preco, id_editora, id_categoria, id]
    );
    return row;
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