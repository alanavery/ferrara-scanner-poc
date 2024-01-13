# frozen_string_literal: true

module Container
  module Image
    module_function

    def tags
      base_tags + extra_tags
    end

    def base_tags
      [
        Environment.current,
        Git.commit_sha
      ]
    end

    def extra_tags
      case Environment.current
      when *TAGGED_ENVIRONMENTS
        [Git.tag]
      when DEVELOP_ENVIRONMENT
        Git.branch == Git.default_branch ? [] : [Git.branch]
      end
    end
  end
end
