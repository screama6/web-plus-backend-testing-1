import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  
  
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  const posts = [
    {
      text: 'Some pre-existing post',
      id: '1',
      date: new Date().toISOString(),
    },
    {
      text: 'Mocked post',
      id: '2',
      date: new Date().toISOString(),
    }
  ]

  beforeEach(async () => {
    jest
    .useFakeTimers()
    .setSystemTime(new Date('2020-01-01'));
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
  
    expect(postsService.create(post)).toEqual(posts[1]);
  });
   
  it('should find a post', () => {
    const id ='1'
    expect(postsService.find(id)).toEqual(posts[0])
  });
});