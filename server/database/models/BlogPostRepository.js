const AbstractRepository = require("./AbstractRepository");

class PostRepository extends AbstractRepository {
  constructor() {
    super({ table: "posts" });
  }

  // C de CRUD - Créer un nouvel article
  async create(post) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, content, author, imageUrl, createdAt) VALUES (?, ?, ?, ?, NOW())`,
      [post.title, post.content, post.author, post.imageUrl]
    );

    return result.insertId;
  }

  // R de CRUD - Lire un article par son ID
  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  // Lire tous les articles
  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  // U de CRUD - Mettre à jour un article existant

  async update(post) {
    const fields = [];
    const values = [];

    // Ajouter chaque champ à la requête uniquement s'il est défini
    if (post.title) {
      fields.push("title = ?");
      values.push(post.title);
    }
    if (post.content) {
      fields.push("content = ?");
      values.push(post.content);
    }
    if (post.author) {
      fields.push("author = ?");
      values.push(post.author);
    }
    if (post.imageUrl) {
      fields.push("imageUrl = ?");
      values.push(post.imageUrl);
    }

    // Ajoute toujours la mise à jour de la date
    fields.push("updatedAt = NOW()");

    const query = `UPDATE ${this.table} SET ${fields.join(", ")} WHERE id = ?`;

    values.push(post.id);

    const [result] = await this.database.query(query, values);

    return result.affectedRows;
  }

  // D de CRUD - Supprimer un article
  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = PostRepository;
