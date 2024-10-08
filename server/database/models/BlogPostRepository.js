const AbstractRepository = require("./AbstractRepository");

class PostRepository extends AbstractRepository {
  constructor() {
    // Appel du constructeur de la classe parente (AbstractRepository)
    // avec le nom de la table "posts"
    super({ table: "posts" });
  }

  // C de CRUD - Créer un nouvel article
  async create(post) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, content, author, image_url, created_at) VALUES (?, ?, ?, ?, NOW())`,
      [post.title, post.content, post.author, post.image_url]
    );

    // Retourner l'ID de l'article nouvellement créé
    return result.insertId;
  }

  // R de CRUD - Lire un article par son ID
  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Retourner le premier article trouvé
    return rows[0];
  }

  // Lire tous les articles
  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Retourner tous les articles
    return rows;
  }

  // U de CRUD - Mettre à jour un article existant
  async update(post) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, content = ?, author = ?, image_url = ?, updated_at = NOW() WHERE id = ?`,
      [post.title, post.content, post.author, post.image_url, post.id]
    );

    // Retourner le nombre de lignes affectées (1 si la mise à jour a réussi)
    return result.affectedRows;
  }

  // D de CRUD - Supprimer un article par son ID
  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Retourner le nombre de lignes affectées (1 si la suppression a réussi)
    return result.affectedRows;
  }
}

module.exports = PostRepository;
