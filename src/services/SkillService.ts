import BaseService from './BaseService'

class SkillService extends BaseService {
  private static instance = new SkillService()

  async getSkills(): Promise<any> {
    const response = await this.client.get('skills')
    return response.data
  }

  static getInstance() {
    return this.instance
  }
}

export default SkillService
