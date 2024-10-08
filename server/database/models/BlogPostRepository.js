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
      `INSERT INTO ${this.table} (title, content, author, imageUrl, created_at) VALUES (?, ?, ?, ?, NOW())`,
      [post.title, post.content, post.author, post.imageUrl]
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
  // U de CRUD - Mettre à jour un article existant
  async update(post) {
    // Tableau pour stocker les parties de la requête SET et les valeurs
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
      fields.push("image_url = ?");
      values.push(post.imageUrl);
    }

    // Ajoute toujours la mise à jour de la date
    fields.push("updated_at = NOW()");

    // Construit la requête dynamique en joignant les champs avec des virgules
    const query = `UPDATE ${this.table} SET ${fields.join(", ")} WHERE id = ?`;

    // Ajoute l'ID à la fin des valeurs
    values.push(post.id);

    // Exécuter la requête SQL
    const [result] = await this.database.query(query, values);

    // Retourner le nombre de lignes affectées (1 si la mise à jour a réussi)
    return result.affectedRows;
  }
}

module.exports = PostRepository;
