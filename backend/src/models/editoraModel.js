import pool from "../db/database.js";

class EditorasModel {
  async showEditoras() {
    const [rows] = await pool.execute("SELECT * FROM editoras;");
    return rows;
  }

  async getEditoraById(id) {
    const [rows] = await pool.execute(
      "SELECT * FROM editoras WHERE id_editora = ?;",
      [id]
    );
    return rows;
  }

  async createEditora(editoraData) {
    const { nome, email, telefone } = editoraData;
    const [row] = await pool.execute(
      "INSERT INTO editoras (nome, email, telefone) VALUES (?, ?, ?);",
      [nome, email, telefone]
    );
    return row;
  }

  async updateEditora(id, editoraData) {
    const { nome, email, telefone } = editoraData;
    const [row] = await pool.execute(
      `UPDATE editoras SET
        nome     = ?,
        email    = ?,
        telefone = ?
       WHERE id_editora = ?;`,
      [nome, email, telefone, id]
    );
    return row;
  }

  async deleteEditora(id) {
    const [row] = await pool.execute(
      "DELETE FROM editoras WHERE id_editora = ?;",
      [id]
    );
    return row;
  }
}

export default new EditorasModel();