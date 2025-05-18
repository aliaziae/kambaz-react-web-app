import { ListGroup, Button, FormControl, Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();  
    return (
        <ListGroup.Item>
            <Row>
                <Col>
                    <FormControl value={todo.title}
                        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
                </Col>
                <Col className="text-end">
                    <Button className="btn-success m-1 float-right" onClick={() =>  dispatch(addTodo(todo))}
                        id="wd-add-todo-click"> Add </Button>
                    <Button className="btn-warning m-1" onClick={() => dispatch(updateTodo(todo))}
                        id="wd-update-todo-click"> Update </Button>
                </Col>
            </Row>

        </ListGroup.Item>
    );
}

