import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-component'
import Palette from 'react-palette'
import styles from './ImageList.module.scss';


export default class ImageList extends React.PureComponent {
  getList() {
    const List = [];
    this.props.imageEdges.forEach(imageEdge => {
      List.push({
        path: imageEdge.node.fields.slug,
        file: imageEdge.node.frontmatter.file.childImageSharp.sizes,
        title: imageEdge.node.frontmatter.title,
        category: imageEdge.node.frontmatter.category,
        place: imageEdge.node.frontmatter.place,
        imageURL: imageEdge.node.frontmatter.file.childImageSharp.sizes.src,
      });
    });
    return List;
  }
  render() {
    const List = this.getList();
    return (
        <Masonry className="showcase">
        {List.map(project => (
          <div key={project.path} className="showcase__item">
            <figure className="card">
              <Img sizes={project.file} />
            </figure>
          </div>
        ))}
        </Masonry>
    );
  }
}
