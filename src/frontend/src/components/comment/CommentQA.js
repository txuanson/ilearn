import React, {useState} from 'react';
import { Comment, Avatar, Form, Button, List, Input, Tooltip} from 'antd';
import moment from 'moment';

const { TextArea } = Input;
const data = [
  {
    author: 'Khanh',
    avatar: '/avata-default.jpg',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Khanh',
    avatar: '/avata-default.jpg',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'comments' : 'comment'}`}
    itemLayout="horizontal"
    // renderItem={props => <Comment {...props} />}
    renderItem={item => (
      <li>
        <Comment
          actions={item.actions}
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.datetime}
        />
      </li>
    )}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
    <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
      Add Comment
    </Button>
    </Form.Item>
  </>
);

export default function CommentQA() {
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        if (!value) {
        return;
        }
        console.log(value)
        setSubmitting(true); 
        const setTimeout = (() => {
            setSubmitting(false);
            setValue('');
            setComments([
                ...comments,
                {
                author: 'Khanh',
                avatar: '/avata-default.jpg',
                content: <p>{value}</p>,
                datetime: moment().fromNow(),
                },
            ])
        }, 1000);
    };

    const handleChange = e => {
        setValue(e.target.value)
    };

    return (
        <>
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
            avatar={
                <Avatar
                src="/avata-default.jpg"
                alt="Khanh"
                />
            }
            content={
                <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
                />
            }
            />
            <CommentList comments={data}/>
        </>
        );
    
}
