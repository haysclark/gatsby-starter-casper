const findName = name => author => author.id === name;
const authorEdgesToList = authorEdges => authorEdges.map(edge => edge.node);

class AuthorModel {
  static hasAuthor(authorEdges, authorId) {
    const authorList = authorEdgesToList(authorEdges);
    return Boolean(authorList.find(findName(authorId)));
  }

  static getAuthor(authorEdges, authorId, fallbackId) {
    const authorList = authorEdgesToList(authorEdges);
    if (this.hasAuthor(authorEdges, authorId)) {
      return authorList.find(findName(authorId));
    }
    return authorList.find(findName(fallbackId));
  }
}

export default AuthorModel;
