# frozen_string_literal: true

module Git
  module Release
    module_function

    def tag_suffix
      Git::Validation.untagged_environment_release_error unless Environment.tagged?

      Environment.current == 'stage' ? '-rc' : ''
    end

    def release_number
      if Git.tag_at_date.empty?
        '01'
      elsif Git.tag_exists_at_commit?
        Git.tag_at_commit.lines.last.split('-').second
      else
        Git.tag_at_date.last.split('-').second.next
      end
    end

    def tag_name
      "v#{Config.date}-#{release_number}#{tag_suffix}"
    end

    def create
      `git tag #{tag_name}`
    end

    def push
      `git push origin #{Git.branch}`
      `git push origin #{tag_name}`
    end
  end
end
