import { Node } from '../../models/node';
import { Rect } from '../../models/rect';

export function defaultAnchors(node: Node) {
  node.anchors.push(new Rect(node.x + node.width / 2 - 4, node.y - 4, 8, 8));
  node.anchors.push(new Rect(node.x + node.width - 4, node.y + node.height / 2 - 4, 8, 8));
  node.anchors.push(new Rect(node.x + node.width / 2 - 4, node.y + node.height - 4, 8, 8));
  node.anchors.push(new Rect(node.x - 4, node.y + node.height / 2 - 4, 8, 8));
}
