import { ListGroup, Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();

    return (
        <ListGroup.Item key={todo.id}>
            <Row>
                <Col>
                    {todo.title}
                </Col>
                <Col className="text-end">
                    <Button className="m-1 float-right" onClick={() => dispatch(setTodo(todo))}
                        id="wd-set-todo-click"> Edit </Button>
                    <Button className="btn-danger m-1 float-right" onClick={() => dispatch(deleteTodo(todo.id))}
                        id="wd-delete-todo-click"> Delete </Button>
                </Col>
            </Row>  </ListGroup.Item>);
}

