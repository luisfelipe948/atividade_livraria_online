import pool from "../db/database.js";

class ComprasModel {
  async showCompras() {
    const [rows] = await pool.execute(
      `SELECT cp.*,
              l.titulo        AS livro,
              cl.nome         AS cliente
       FROM compras cp
       JOIN livros   l  ON cp.id_livro   = l.id_livro
       JOIN clientes cl ON cp.id_cliente = cl.id_cliente;`
    );
    return rows;
  }

  async getCompraById(id) {
    const [rows] = await pool.execute(
      "SELECT * FROM compras WHERE id_compra = ?;",
      [id]
    );
    return rows;
  }

  async createCompra(compraData) {
    const { qtde, valor, desconto, id_livro, id_cliente } = compraData;
    const [row] = await pool.execute(
      "INSERT INTO compras (qtde, valor, desconto, id_livro, id_cliente) VALUES (?, ?, ?, ?, ?);",
      [qtde, valor, desconto, id_livro, id_cliente]
    );
    return row;
  }

  async updateCompra(id, compraData) {
    const { qtde, valor, desconto, id_livro, id_cliente } = compraData;
    const [row] = await pool.execute(
      `UPDATE compras SET
        qtde       = ?,
        valor      = ?,
        desconto   = ?,
        id_livro   = ?,
        id_cliente = ?
       WHERE id_compra = ?;`,
      [qtde, valor, desconto, id_livro, id_cliente, id]
    );
    return row;
  }

  async deleteCompra(id) {
    const [row] = await pool.execute(
      "DELETE FROM compras WHERE id_compra = ?;",
      [id]
    );
    return row;
  }
}

export default new ComprasModel();