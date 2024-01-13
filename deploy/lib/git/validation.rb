# frozen_string_literal: true

module Git
  module Validation
    module_function

    def check
      invalid_branch_for_tag_error unless valid_branch_for_tag?
    end

    def valid_branch_for_tag?
      TAGGED_ENVIRONMENTS.include?(Environment.current) && valid_tag_sources?
    end

    def valid_tag_sources?
      !%x(
      git --no-pager \
        branch \
          --all \
          --list origin/#{Git.default_branch} \
          --list origin/#{Git.hotfix_branch} \
          --contains #{Git.tagged_commit}
      ).strip.empty?
    end

    def invalid_branch_for_tag_error
      abort "
        Branch '#{Git.branch}' is not a valid source branch for a
        '#{Environment.current}' deployment using tag '#{Git.tag}'.
        Try pushing '#{Git.default_branch}' or '#{Git.hotfix_branch}' first.
        Make sure to also push the tag.
      "
    end

    def untagged_environment_release_error
      abort "\nA release using tags is only valid for environments other than dev!"
    end
  end
end
