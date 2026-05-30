
import pool from "../db/database.js";

class ComprasModel {

  async showCompras() {
    const [rows] = await pool.execute(`
      SELECT 
        c.id_compra,
        c.qtde,
        c.valor,
        c.desconto,
        c.data_compra,
        cli.nome AS cliente,
        l.titulo AS livro
      FROM compras c
      JOIN clientes cli ON c.id_cliente = cli.id_cliente
      JOIN livros l ON c.id_livro = l.id_livro;
    `);

    return rows;
  }


  async getCompraById(id) {
    const [rows] = await pool.execute(
      "SELECT * FROM compras WHERE id_compra = ?;",
      [id]
    );

    return rows[0];
  }


  async createCompra(compraData) {
    const { qtde, valor, desconto, data_compra, id_livro, id_cliente } = compraData;

    const [rows] = await pool.execute(
      `
      INSERT INTO compras 
      (qtde, valor, desconto, data_compra, id_livro, id_cliente)
      VALUES (?, ?, ?, ?, ?, ?);
      `,
      [qtde, valor, desconto, data_compra, id_livro, id_cliente]
    );

    return rows;
  }


  async updateCompra(id, compraData) {
    const { qtde, valor, desconto, data_compra, id_livro, id_cliente } = compraData;

    const [rows] = await pool.execute(
      `
      UPDATE compras SET
        qtde = ?,
        valor = ?,
        desconto = ?,
        data_compra = ?,
        id_livro = ?,
        id_cliente = ?
      WHERE id_compra = ?;
      `,
      [qtde, valor, desconto, data_compra, id_livro, id_cliente, id]
    );

    return rows;
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