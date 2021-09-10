import React, {useEffect, useState} from 'react';
import { Comment, Avatar, Form, Button, Input} from 'antd';
import handleErrorApi from '../../utils/handleErrorApi';
import { getProfileUser, writeCommentSection } from '../../api/user';

const { TextArea } = Input;

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

export default function EditComment({section_id, fetch}) {
    //const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const [profileUser, setProfileUser] = useState([]);
    const handleSubmit = async () => {
        if (!value) {
        return;
        }
        setSubmitting(false);
        try {
            await writeCommentSection({section_id: section_id, content: value});
            setValue('');
            fetch(1);
        } catch (err) {
          handleErrorApi(err)
        }

    };

    const handleChange = e => {
        setValue(e.target.value);
    };

    useEffect(async () => {
        try {
          const resProfile = await getProfileUser();
          setProfileUser(resProfile);
        } catch (err) {
          handleErrorApi(err);
        }
      }, []);

    return (
        <>
            <Comment
            avatar={
                <Avatar
                src={process.env.REACT_APP_BASE_HOST + "/" + profileUser.avatar}
                alt={profileUser.name}
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
        </>
        );
    
}