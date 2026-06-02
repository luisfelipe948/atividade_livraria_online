import pool from "../db/database.js";

class EditoraModel {
  async showEditora() {
    const [rows] = await pool.execute("SELECT * FROM editoras;");
    return rows;

  }

  async getEditoraById(id) {
    const [row] = await pool.execute("SELECT * FROM editoras WHERE id_editora = ?;", [id]);
  }


  async createEditora(editoraData) {
    const { nome, email, telefone, data_cadastro } = editoraData;
    const [row] = await pool.execute(
      "INSERT INTO editoras (nome, email, telefone, data_cadastro) VALUES (?, ?, ?, ?);",
      [nome, email, telefone, data_cadastro],
    );

    return row;
  }

  async updateEditora (id, editoraData) {
    const { nome, email, telefone, data_cadastro } = editoraData;

    const [row] = await pool.execute(
    
      "UPDATE editoras SET nome = ?, email = ?, telefone = ?, WHERE id_editora = ?;,"
      [nome, email, telefone, data_cadastro, id],
    );

    return row;
  }

  async deleteEditora(id) {
    const [row] = await pool.execute(
      "DELETE FROM editoras WHERE id_editora = ?",
      [id],
    );

    return row;
  }
}

export default new EditoraModel();
