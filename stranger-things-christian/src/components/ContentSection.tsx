import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Press Start 2P', cursive;
  font-size: 2rem;
  color: #ff0000;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 0 10px #ff0000;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ffff, transparent);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContentCard = styled(motion.div)`
  background: rgba(255, 0, 0, 0.05);
  border: 2px solid rgba(255, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    border-color: #00ffff;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
  }
`;

const CardTitle = styled.h3`
  font-family: 'Kalam', cursive;
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const CardDescription = styled.p`
  font-family: 'Kalam', cursive;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CardLink = styled.a`
  color: #00ffff;
  text-decoration: none;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  text-transform: uppercase;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff0000;
    text-shadow: 0 0 5px #ff0000;
  }
`;

const VideoThumbnail = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.2), rgba(0, 255, 255, 0.2));
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '▶';
    position: absolute;
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  
  &:hover::before {
    color: #00ffff;
    text-shadow: 0 0 15px #00ffff;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 0, 0, 0.3);
`;

const BlogDate = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.7rem;
  color: #00ffff;
`;

const ReadMoreLink = styled(motion.a)`
  color: #ff0000;
  text-decoration: none;
  font-family: 'Kalam', cursive;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #00ffff;
  }
`;

const AddContentButton = styled(motion.button)`
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  padding: 0.8rem 1.5rem;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.7rem;
  text-transform: uppercase;
  cursor: pointer;
  margin: 2rem auto;
  display: block;
  transition: all 0.3s ease;
  
  &:hover {
    background: #00ffff;
    color: #000;
    transform: scale(1.05);
  }
`;

const Modal = styled(motion.div)<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContent = styled(motion.div)`
  background: rgba(10, 10, 10, 0.95);
  border: 2px solid #ff0000;
  border-radius: 10px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalTitle = styled.h3`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  color: #ff0000;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-family: 'Kalam', cursive;
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 5px;
  color: #ffffff;
  font-family: 'Kalam', cursive;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #00ffff;
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 5px;
  color: #ffffff;
  font-family: 'Kalam', cursive;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #00ffff;
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const SubmitButton = styled(motion.button)`
  background: #ff0000;
  border: none;
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #00ffff;
    color: #000;
  }
`;

const CancelButton = styled(motion.button)`
  background: transparent;
  border: 2px solid #ff0000;
  color: #ff0000;
  padding: 0.8rem 1.5rem;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff0000;
    color: #ffffff;
  }
`;

interface ContentItem {
  id: number;
  title: string;
  url?: string;
  description?: string;
  excerpt?: string;
  date?: string;
  thumbnail?: string;
}

interface Props {
  title: string;
  content: ContentItem[];
  type: 'links' | 'videos' | 'blog';
}

const ContentSection: React.FC<Props> = ({ title, content, type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    excerpt: '',
    date: new Date().toISOString().split('T')[0]
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      title: '',
      url: '',
      description: '',
      excerpt: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log('New content:', formData);
    closeModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <SectionContainer id={type === 'links' ? 'resources' : type === 'videos' ? 'videos' : 'blog'}>
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </SectionTitle>
      
      <ContentGrid>
        {content.map((item, index) => (
          <ContentCard
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {type === 'videos' && (
              <VideoThumbnail />
            )}
            
            {type === 'blog' && (
              <BlogMeta>
                <BlogDate>{item.date}</BlogDate>
              </BlogMeta>
            )}
            
            <CardTitle>{item.title}</CardTitle>
            
            {type === 'links' && (
              <>
                <CardDescription>{item.description}</CardDescription>
                <CardLink href={item.url} target="_blank" rel="noopener noreferrer">
                  Visit Link →
                </CardLink>
              </>
            )}
            
            {type === 'videos' && (
              <>
                <CardDescription>{item.description}</CardDescription>
                <CardLink href={item.url} target="_blank" rel="noopener noreferrer">
                  Watch Video →
                </CardLink>
              </>
            )}
            
            {type === 'blog' && (
              <>
                <CardDescription>{item.excerpt}</CardDescription>
                <ReadMoreLink
                  href={item.url}
                  whileHover={{ x: 5 }}
                >
                  Read More →
                </ReadMoreLink>
              </>
            )}
          </ContentCard>
        ))}
      </ContentGrid>
      
      <AddContentButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openModal}
      >
        Add {type === 'links' ? 'Link' : type === 'videos' ? 'Video' : 'Blog Post'}
      </AddContentButton>
      
      <Modal
        isOpen={isModalOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: isModalOpen ? 1 : 0 }}
        onClick={closeModal}
      >
        <ModalContent
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalTitle>
            Add New {type === 'links' ? 'Link' : type === 'videos' ? 'Video' : 'Blog Post'}
          </ModalTitle>
          
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            {(type === 'links' || type === 'videos') && (
              <FormGroup>
                <Label htmlFor="url">URL</Label>
                <Input
                  type="url"
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            )}
            
            {type === 'blog' && (
              <FormGroup>
                <Label htmlFor="date">Date</Label>
                <Input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </FormGroup>
            )}
            
            <FormGroup>
              <Label htmlFor="description">
                {type === 'blog' ? 'Excerpt' : 'Description'}
              </Label>
              <TextArea
                id={type === 'blog' ? 'excerpt' : 'description'}
                name={type === 'blog' ? 'excerpt' : 'description'}
                value={type === 'blog' ? formData.excerpt : formData.description}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <ButtonGroup>
              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </SubmitButton>
              <CancelButton
                type="button"
                onClick={closeModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </CancelButton>
            </ButtonGroup>
          </form>
        </ModalContent>
      </Modal>
    </SectionContainer>
  );
};

export default ContentSection;
