import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
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
    const postWithId: Omit<Post, 'id' | 'date'> = {
      text: 'Some pre-existing post',
    }

    expect(postsService.find('1')).toEqual(postWithId)
  });
});