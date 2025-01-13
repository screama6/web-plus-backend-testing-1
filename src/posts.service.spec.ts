import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  
  
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
  jest
  .useFakeTimers()
  .setSystemTime(new Date('2020-01-01'));
    postsService = new PostsService();
    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const postId: Post = {
    ...post,
    id: '2',
    date: new Date().toISOString(),
  };

    expect(postsService.create(post)).toEqual(postId);
  });
   
  it('should find a post', () => {
    const postWithId = {
      text: 'Some pre-existing post',
      id: '2',
      date: new Date().toISOString(),
    }
    

    expect(postsService.find('2')).toEqual(postWithId)
  });
});